// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SettingOutlinedSvg from '@colelab/icons-svg/es/asn/SettingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SettingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SettingOutlinedSvg }, slots);
  },
});
