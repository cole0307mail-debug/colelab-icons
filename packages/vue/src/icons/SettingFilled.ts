// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import SettingFilledSvg from '@colelab/icons-svg/es/asn/SettingFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'SettingFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: SettingFilledSvg }, slots);
  },
});
