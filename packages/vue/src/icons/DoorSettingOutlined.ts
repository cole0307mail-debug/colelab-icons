// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import DoorSettingOutlinedSvg from '@colelab/icons-svg/es/asn/DoorSettingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'DoorSettingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: DoorSettingOutlinedSvg }, slots);
  },
});
