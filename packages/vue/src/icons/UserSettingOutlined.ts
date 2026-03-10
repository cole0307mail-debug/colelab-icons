// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import UserSettingOutlinedSvg from '@colelab/icons-svg/es/asn/UserSettingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'UserSettingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: UserSettingOutlinedSvg }, slots);
  },
});
